'use client'

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Magic-Lum Chile",
    "description": "Proyección GOBO LED profesional en Chile. Eliminamos residuos publicitarios con tecnología de proyección de alta definición.",
    "url": "https://www.magic-lum.cl",
    "logo": "https://www.magic-lum.cl/logo.png",
    "image": "https://www.magic-lum.cl/og-image.jpg",
    "telephone": "+56-9-XXXX-XXXX",
    "email": "hola@magic-lum.cl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "@country": "Chile"
    },
    "sameAs": [
      "https://www.linkedin.com/company/magic-lum-chile",
      "https://www.instagram.com/magiclumchile"
    ],
    "foundingDate": "2023",
    "numberOfEmployees": "5-10",
    "industry": "Publicidad Sustentable y Tecnología LED"
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Proyección GOBO LED",
    "description": "Servicio de proyección GOBO LED para reemplazar publicidad tradicional. Eliminamos 100% de residuos publicitarios con tecnología de proyección de alta definición.",
    "provider": {
      "@type": "Organization",
      "name": "Magic-Lum Chile",
      "url": "https://www.magic-lum.cl"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Proyección GOBO",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Demo Gratuita de Proyección",
            "description": "Instalación gratuita de proyector GOBO por 2 horas para demostración"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Instalación Permanente GOBO",
            "description": "Instalación profesional de sistema de proyección GOBO LED"
          }
        }
      ]
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es la proyección GOBO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GOBO (Goes Before Optics) es una tecnología de proyección LED que permite mostrar logotipos, textos e imágenes de alta definición en cualquier superficie, reemplazando pendones y vallas tradicionales sin generar residuos."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Cuánto tiempo toma la instalación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La instalación de un sistema GOBO toma entre 1-2 horas. Para demostraciones gratuitas, instalamos temporalmente en menos de 30 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto ahorro comparado con publicidad tradicional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestros clientes ahorran en promedio 80% en costos anuales de publicidad, eliminando gastos de impresión, instalación y renovación de pendones y vallas."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}