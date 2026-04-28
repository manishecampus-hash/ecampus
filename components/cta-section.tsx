'use client'

import { ContainerAnimated, ContainerStagger, GalleryGrid, GalleryGridCell } from '@/components/ui/cta-section-with-gallery'
import { Button } from '@/components/ui/button'

const IMAGES = [
  '/gallery/indian-students-1.jpg',
  '/gallery/indian-students-2.jpg',
  '/gallery/indian-students-3.jpg',
  '/gallery/indian-students-4.jpg',
]

export function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 md:grid-cols-2">
        <ContainerStagger>
          <ContainerAnimated className="mb-4 block text-xs font-medium text-primary md:text-sm">
            Transform Your Future
          </ContainerAnimated>
          <ContainerAnimated className="text-4xl font-semibold md:text-[2.4rem] tracking-tight text-balance">
            Ready to Transform Your Career?
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-gray-600 md:my-6 md:text-lg">
            Start your learning journey today and join thousands of successful graduates. Access world-class education from industry experts.
          </ContainerAnimated>
          <ContainerAnimated>
            <Button className="bg-primary hover:bg-red-700">Start Your Journey Today</Button>
          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
                alt="Student learning experience"
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  )
}
