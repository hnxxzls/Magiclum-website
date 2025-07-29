# Guía de Contribución - Magic-Lum Landing Page

¡Gracias por tu interés en contribuir al proyecto de Magic-Lum! Esta guía te ayudará a entender cómo colaborar efectivamente.

## 📋 Índice

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Código](#estándares-de-código)
- [Testing](#testing)
- [Documentación](#documentación)

## 🤝 Código de Conducta

Este proyecto adhiere a estándares profesionales de colaboración:

- **Respeto mutuo** en todas las interacciones
- **Comunicación clara** y constructiva
- **Foco en la optimización de conversión** del sitio
- **Compromiso con la calidad** del código

## 🚀 Cómo Contribuir

### Tipos de Contribuciones Bienvenidas

1. **Optimizaciones de Conversión**
   - Mejoras en UX/UI del funnel
   - A/B tests de headlines y CTAs
   - Optimizaciones de formularios

2. **Performance**
   - Mejoras de velocidad de carga
   - Optimizaciones de Core Web Vitals
   - Optimizaciones de bundle size

3. **Código**
   - Bug fixes
   - Nuevas funcionalidades
   - Refactoring de componentes

4. **Documentación**
   - Mejoras en README
   - Documentación técnica
   - Guías de optimización

### Antes de Contribuir

1. **Revisa los issues existentes** para evitar duplicación
2. **Crea un issue** para discutir cambios importantes
3. **Enfócate en conversión** - cada cambio debe justificar su impacto en la tasa de conversión

## ⚙️ Configuración del Entorno

### Prerrequisitos

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
```

### Setup Local

```bash
# 1. Fork y clona el repositorio
git clone https://github.com/tu-usuario/magic-lum-landing.git
cd magic-lum-landing

# 2. Instala dependencias
npm install

# 3. Crea archivo de variables de entorno
cp .env.example .env.local

# 4. Configura las variables necesarias en .env.local
# (Ver .env.example para referencia)

# 5. Ejecuta en modo desarrollo
npm run dev

# 6. Abre http://localhost:3000
```

### Verificación del Setup

```bash
# Ejecutar linting
npm run lint

# Verificar tipos de TypeScript
npm run type-check

# Build de producción
npm run build
```

## 📝 Flujo de Trabajo

### 1. Preparación

```bash
# Actualiza tu fork
git checkout main
git pull upstream main

# Crea una nueva rama
git checkout -b feature/descripcion-corta
# o
git checkout -b fix/descripcion-del-bug
# o
git checkout -b optimization/descripcion-mejora
```

### 2. Desarrollo

```bash
# Desarrolla tus cambios
npm run dev

# Ejecuta linting frecuentemente
npm run lint:fix

# Verifica tipos
npm run type-check
```

### 3. Testing

```bash
# Ejecuta el build para verificar que todo funciona
npm run build

# Prueba la versión de producción
npm run preview

# Verifica en diferentes dispositivos y navegadores
```

### 4. Commit y Push

```bash
# Staging de cambios
git add .

# Commit con mensaje descriptivo
git commit -m "optimization: mejora CTA principal para mobile"

# Push a tu fork
git push origin feature/descripcion-corta
```

### 5. Pull Request

1. Ve a GitHub y crea un Pull Request
2. Usa el template de PR (se creará automáticamente)
3. Describe claramente los cambios y su impacto en conversión
4. Incluye screenshots si hay cambios visuales

## 📊 Estándares de Código

### TypeScript

```typescript
// ✅ Bueno - Tipado explícito y claro
interface CTAButtonProps {
  text: string
  onClick: () => void
  variant: 'primary' | 'secondary'
  loading?: boolean
}

// ❌ Malo - Sin tipado, ambiguo
function Button(props: any) {
  return <button {...props} />
}
```

### Componentes React

```tsx
// ✅ Bueno - Componente funcional con hooks
import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  onCTAClick: () => void
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  const handleClick = useCallback(() => {
    setIsAnimating(true)
    onCTAClick()
  }, [onCTAClick])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero-section"
    >
      {/* Contenido */}
    </motion.section>
  )
}
```

### CSS/Tailwind

```tsx
// ✅ Bueno - Clases organizadas y responsive
<button className="
  bg-magic-gold text-magic-dark 
  px-8 py-4 rounded-full 
  font-bold text-lg
  hover:bg-yellow-300 hover:scale-105
  transition-all duration-300
  md:px-12 md:py-6
  shadow-cta hover:shadow-2xl
">
  Solicitar Demo
</button>

// ❌ Malo - Clases desordenadas
<button className="bg-magic-gold hover:bg-yellow-300 text-magic-dark font-bold px-8 text-lg py-4 rounded-full hover:scale-105 transition-all duration-300">
```

### Convenciones de Nombres

```bash
# Archivos y Carpetas
components/HeroSection.tsx    # PascalCase para componentes
lib/calculator-logic.ts       # kebab-case para utilidades
types/form-types.ts           # kebab-case para tipos

# Variables y Funciones
const isModalOpen = false     # camelCase
const handleSubmit = () => {} # camelCase con prefijo handle-

# Constantes
const API_ENDPOINTS = {}      # SCREAMING_SNAKE_CASE
const CONVERSION_COLORS = {}  # SCREAMING_SNAKE_CASE
```

## 🧪 Testing

### Checklist Pre-Commit

- [ ] **Funcionalidad**: Todas las features funcionan correctamente
- [ ] **Responsive**: Diseño funciona en móvil, tablet y desktop
- [ ] **Performance**: No hay regresiones en velocidad
- [ ] **Conversión**: Los CTAs funcionan y el formulario envía datos
- [ ] **Linting**: `npm run lint` pasa sin errores
- [ ] **Build**: `npm run build` se ejecuta exitosamente
- [ ] **Types**: `npm run type-check` pasa sin errores

### Testing Manual

```bash
# 1. Desktop Chrome
# 2. Mobile Safari (iOS)
# 3. Mobile Chrome (Android)
# 4. Firefox
# 5. Edge

# Verificar:
- Scroll suave entre secciones
- Animaciones fluidas
- Formulario de demo funcional
- CTAs visibles y accesibles
- Velocidad de carga < 3 segundos
```

## 📚 Documentación

### Comentarios en Código

```tsx
// ✅ Bueno - Explica el "por qué", no el "qué"
// Reducimos la fricción del formulario usando solo campos esenciales
// para maximizar la tasa de conversión
const essentialFields = ['nombre', 'empresa', 'email', 'telefono']

// ❌ Malo - Explica lo obvio
// Creamos un array con los nombres de los campos
const fields = ['nombre', 'empresa', 'email', 'telefono']
```

### README Updates

Si tu contribución afecta:
- Setup del proyecto
- Scripts disponibles  
- Configuración de variables de entorno
- Proceso de despliegue

**Actualiza el README.md** correspondiente.

## 🎯 Criterios de Revisión

### Enfoque en Conversión

Cada PR será evaluado considerando:

1. **Impacto en Conversión**
   - ¿Mejora la tasa de conversión?
   - ¿Reduce la fricción del usuario?
   - ¿Optimiza el funnel de ventas?

2. **Calidad Técnica**
   - Código limpio y mantenible
   - Performance optimizado
   - Tipado correcto en TypeScript

3. **UX/UI**
   - Consistencia con el diseño
   - Responsive design
   - Accesibilidad básica

### Proceso de Revisión

1. **Revisión automática**: Linting, types, build
2. **Revisión manual**: Código, UX, conversión
3. **Testing**: Funcionalidad en diferentes dispositivos
4. **Aprobación**: Por maintainer del proyecto

## 📞 Soporte

¿Tienes preguntas sobre contribuciones?

- **Issues**: Crea un issue con la etiqueta `question`
- **Email**: hola@magic-lum.cl
- **Revisión**: Los PRs se revisan dentro de 48h hábiles

## 🏆 Reconocimientos

Los contribuidores destacados serán reconocidos en:
- README principal del proyecto
- Releases notes
- Comunicaciones de la empresa (con consentimiento)

---

**¡Gracias por ayudar a optimizar la conversión de Magic-Lum! 🚀**