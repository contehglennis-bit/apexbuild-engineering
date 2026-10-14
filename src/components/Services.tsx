import { useState } from 'react'
import { Link } from 'react-router-dom'
import servicesPlaceholder from '../assets/services-placeholder.svg'

// Swap this for real photography during the dedicated photography pass.
const serviceImage = { src: servicesPlaceholder, alt: '' }

const services = [
  {
    id: 'construction',
    number: '01',
    name: 'Construction',
    description:
      'From new builds to structural works, we coordinate construction activities with a focus on quality, safety and dependable execution.',
  },
  {
    id: 'civil-engineering',
    number: '02',
    name: 'Civil Engineering',
    description:
      'Practical engineering solutions for infrastructure, site development and structural requirements, grounded in careful planning and technical detail.',
  },
  {
    id: 'project-management',
    number: '03',
    name: 'Project Management',
    description:
      'Coordinating people, timelines, materials and site activities to keep projects organized from planning through completion.',
  },
  {
    id: 'renovation',
    number: '04',
    name: 'Renovation & Refurbishment',
    description:
      'Thoughtful upgrades and renovations that improve existing spaces while respecting their structure, purpose and character.',
  },
]

function Services() {
  const [selectedId, setSelectedId] = useState(services[0].id)
  const selectedService =
    services.find((service) => service.id === selectedId) ?? services[0]

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-brand-navy py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-orange uppercase sm:text-sm">
          Services
        </p>
        <h2
          id="services-heading"
          className="mt-5 max-w-2xl text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl"
        >
          What we do
        </h2>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-white/80 sm:text-lg">
          From construction and civil engineering to project coordination and
          refurbishment, our work is built around careful planning and
          practical execution.
        </p>

        <div className="mt-12 lg:grid lg:grid-cols-[38%_62%] lg:gap-16">
          {/* Service list */}
          <ul className="border-t border-white/10">
            {services.map((service) => {
              const isSelected = service.id === selectedId
              return (
                <li key={service.id} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedId(service.id)}
                    aria-current={isSelected}
                    className={`flex w-full items-baseline gap-4 py-5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white ${
                      isSelected ? 'text-white' : 'text-white/50 hover:text-white/80'
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        isSelected ? 'text-brand-orange' : 'text-white/40'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="text-lg font-bold tracking-tight sm:text-xl">
                      {service.name}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Selected service detail */}
          <div aria-live="polite" className="mt-10 lg:mt-0">
            <img
              src={serviceImage.src}
              alt={serviceImage.alt}
              className="aspect-[16/10] w-full border-t-2 border-brand-orange object-cover"
            />
            <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {selectedService.name}
            </h3>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-white/80 sm:text-lg">
              {selectedService.description}
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 sm:mt-20">
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase decoration-brand-orange decoration-2 underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Have a project in mind? <span aria-hidden="true">→</span> Start a
            project
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services