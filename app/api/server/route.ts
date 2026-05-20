import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const agent_id = req.nextUrl.searchParams.get("agent_id");

  console.log("API is live");
  console.log("Agent ID:", agent_id);

  return NextResponse.json({
    success: true,
    agent_id,
  });
}

// require('dotenv').config();

// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {

//   const express = require("express");
//   const WebSocket = require("ws");
//   const http = require("http");

//   const app = express();

//   const server = http.createServer(app);

//   /*
// |--------------------------------------------------------------------------
// | WebSocket Server
// |--------------------------------------------------------------------------
// */

//   const wss = new WebSocket.Server({
//     server,
//     path: "/media-stream",
//   });

//   /*
// |--------------------------------------------------------------------------
// | Twilio Connected
// |--------------------------------------------------------------------------
// */

//   wss.on("connection", (twilioSocket) => {
//     console.log("Twilio connected");

//     /*
//     |--------------------------------------------------------------------------
//     | Connect ElevenLabs
//     |--------------------------------------------------------------------------
//     */

//     const elevenSocket = new WebSocket(
//       `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=agent_6401kqvw9asxf9tv122rs9bd6h86`,
//       {
//         headers: {
//           "xi-api-key": "sk_735c31580010ca7bdc0dcdc7a9e9b1416334aa00bb915e18",
//         },
//       },
//     );

//     /*
//     |--------------------------------------------------------------------------
//     | ElevenLabs Connected
//     |--------------------------------------------------------------------------
//     */

//     elevenSocket.on("open", () => {
//       console.log("Connected to ElevenLabs");
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Receive Audio From Twilio
//     |--------------------------------------------------------------------------
//     */

//     twilioSocket.on("message", (message) => {
//       try {
//         const data = JSON.parse(message);

//         /*
//             |--------------------------------------------------------------------------
//             | Stream Started
//             |--------------------------------------------------------------------------
//             */

//         if (data.event === "start") {
//           console.log("Twilio stream started");
//         }

//         /*
//             |--------------------------------------------------------------------------
//             | Audio Media
//             |--------------------------------------------------------------------------
//             */

//         if (data.event === "media") {
//           const audioPayload = data.media.payload;

//           /*
//                 |--------------------------------------------------------------------------
//                 | Send Audio To ElevenLabs
//                 |--------------------------------------------------------------------------
//                 */

//           if (elevenSocket.readyState === WebSocket.OPEN) {
//             elevenSocket.send(
//               JSON.stringify({
//                 user_audio_chunk: audioPayload,
//               }),
//             );
//           }
//         }

//         /*
//             |--------------------------------------------------------------------------
//             | Stream Stopped
//             |--------------------------------------------------------------------------
//             */

//         if (data.event === "stop") {
//           console.log("Twilio stream stopped");
//         }
//       } catch (err) {
//         console.log(err.message);
//       }
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Receive AI Voice From ElevenLabs
//     |--------------------------------------------------------------------------
//     */

//     elevenSocket.on("message", (message) => {
//       try {
//         const data = JSON.parse(message.toString());

//         /*
//             |--------------------------------------------------------------------------
//             | AI Audio Response
//             |--------------------------------------------------------------------------
//             */

//         if (data.audio_event) {
//           twilioSocket.send(
//             JSON.stringify({
//               event: "media",
//               media: {
//                 payload: data.audio_event.audio_base_64,
//               },
//             }),
//           );
//         }
//       } catch (err) {
//         console.log(err.message);
//       }
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Close Twilio Connection
//     |--------------------------------------------------------------------------
//     */

//     twilioSocket.on("close", () => {
//       console.log("Twilio disconnected");

//       if (elevenSocket.readyState === WebSocket.OPEN) {
//         elevenSocket.close();
//       }
//     });

//     /*
//     |--------------------------------------------------------------------------
//     | Close ElevenLabs Connection
//     |--------------------------------------------------------------------------
//     */

//     elevenSocket.on("close", () => {
//       console.log("ElevenLabs disconnected");
//     });
//   });

//   /*
// |--------------------------------------------------------------------------
// | Start Server
// |--------------------------------------------------------------------------
// */

//   server.listen(3000, () => {
//     console.log(`Server running on `);
//   });
// }
