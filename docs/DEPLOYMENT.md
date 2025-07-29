# Guía de Despliegue - Magic-Lum Landing Page

Esta guía detalla el proceso completo de despliegue para la landing page de Magic-Lum en Vercel y configuraciones adicionales.

## 📋 Índice

- [Configuración Inicial](#configuración-inicial)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Variables de Entorno](#variables-de-entorno)
- [Configuración de Dominio](#configuración-de-dominio)
- [Formularios y Integraciones](#formularios-y-integraciones)
- [Analytics y Tracking](#analytics-y-tracking)
- [Optimizaciones Post-Deploy](#optimizaciones-post-deploy)
- [Monitoreo y Mantenimiento](#monitoreo-y-mantenimiento)

## ⚙️ Configuración Inicial

### Prerrequisitos

1. **Cuenta en Vercel** (https://vercel.com)
2. **Repositorio en GitHub** con el código
3. **Dominio personalizado** (opcional)
4. **Servicios de terceros configurados**:
   - Formspree/Resend para formularios
   - Google Analytics
   - Google Tag Manager (opcional)

### Preparación del Repositorio

```bash
# 1. Asegúrate de que todo esté commiteado
git add .
git commit -m "feat: preparar para despliegue en producción"
git push origin main

# 2. Verifica que el build funcione localmente
npm run build
npm run start

# 3. Ejecuta verificaciones finales
npm run lint
npm run type-check
```

## 🚀 Despliegue en Vercel

### Método 1: Desde Dashboard de Vercel (Recomendado)

1. **Conectar Repositorio**:
   ```
   1. Ve a https://vercel.com/dashboard
   2. Click en "New Project"
   3. Importa tu repositorio de GitHub
   4. Selecciona el repositorio "magic-lum-landing"
   ```

2. **Configuración del Proyecto**:
   ```
   Project Name: magic-lum-landing
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Development Command: npm run dev
   ```

3. **Variables de Entorno**:
   ```
   Configura las variables desde el dashboard:
   Settings → Environment Variables
   ```

### Método 2: Desde CLI de Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login en Vercel
vercel login

# 3. Desplegar desde el directorio del proyecto
cd magic-lum-landing
vercel

# 4. Seguir las instrucciones del CLI
# - Link to existing project? No
# - Project name? magic-lum-landing
# - Directory? ./
# - Build Command? npm run build
```

## 🔐 Variables de Entorno

### Variables Obligatorias

```bash
# Sitio
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com

# Formulario (elegir una opción)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
# O
NEXT_PUBLIC_FORM_ENDPOINT=https://tu-servicio.com/api/contact

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Variables Opcionales

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Optimizaciones
NEXT_PUBLIC_VERCEL_ANALYTICS=true
NEXT_PUBLIC_TRACK_WEB_VITALS=true

# Desarrollo
NEXT_PUBLIC_DEV_INDICATORS=false
NEXT_PUBLIC_DEBUG_MODE=false
```

### Configuración en Vercel Dashboard

```
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega cada variable:
   - Name: NEXT_PUBLIC_SITE_URL
   - Value: https://magic-lum.vercel.app
   - Environment: Production, Preview, Development
4. Click "Save"
5. Redeploy el proyecto
```

## 🌐 Configuración de Dominio

### Dominio Personalizado

1. **Comprar Dominio** (ej: magic-lum.cl en NIC Chile)

2. **Configurar en Vercel**:
   ```
   1. Settings → Domains
   2. Add Domain: magic-lum.cl
   3. Add Domain: www.magic-lum.cl
   4. Configura www como redirect a magic-lum.cl
   ```

3. **Configurar DNS**:
   ```
   # En tu proveedor de DNS (ej: Cloudflare)
   
   # Tipo A Record
   Name: @
   Value: 76.76.19.61 (IP de Vercel)
   
   # Tipo CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Verificar SSL**:
   ```
   Vercel automáticamente genera certificados SSL
   Verifica que https:// funcione correctamente
   ```

### Subdominios (Opcional)

```bash
# Para diferentes ambientes
staging.magic-lum.cl → Preview deployments
app.magic-lum.cl → Futuras aplicaciones
```

## 📧 Formularios y Integraciones

### Configuración de Formspree

1. **Crear Cuenta**: https://formspree.io
2. **Crear Formulario**:
   ```
   1. New Form
   2. Name: Magic-Lum Demo Requests
   3. Copy Form ID: xpzgkdwq (ejemplo)
   ```

3. **Configurar Variable**:
   ```bash
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xpzgkdwq
   ```

4. **Configurar Notificaciones**:
   ```
   Settings → Notifications
   Email: hola@magic-lum.cl
   Webhook: (opcional para CRM)
   ```

### Configuración de Resend (Alternativa)

1. **Crear Cuenta**: https://resend.com
2. **Generar API Key**:
   ```
   API Keys → Create API Key
   Name: Magic-Lum Landing
   Copy: re_xxxxxxxxxxxx
   ```

3. **Variables de Entorno**:
   ```bash
   NEXT_PUBLIC_RESEND_API_KEY=re_xxxxxxxxxxxx
   NOTIFICATION_EMAIL=hola@magic-lum.cl
   ```

## 📊 Analytics y Tracking

### Google Analytics 4

1. **Crear Propiedad**:
   ```
   1. analytics.google.com
   2. Create Property: Magic-Lum Landing
   3. Copy Measurement ID: G-XXXXXXXXXX
   ```

2. **Configurar Variable**:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Eventos de Conversión**:
   ```javascript
   // Automáticamente trackeados:
   - page_view
   - demo_request_started (modal abierto)
   - demo_request_completed (formulario enviado)
   - cta_clicked (botones principales)
   ```

### Google Tag Manager (Opcional)

1. **Crear Container**:
   ```
   tagmanager.google.com
   Create Account: Magic-Lum
   Container: Landing Page
   Copy ID: GTM-XXXXXXX
   ```

2. **Configurar Variable**:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Vercel Analytics

```bash
# Ya incluido en el proyecto
# Se activa automáticamente con:
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

## 🔧 Optimizaciones Post-Deploy

### Performance

1. **Verificar Core Web Vitals**:
   ```
   1. https://pagespeed.web.dev
   2. Analizar: https://tu-dominio.com
   3. Objetivo: 90+ en Performance
   ```

2. **Optimizar Imágenes**:
   ```bash
   # Si agregaste imágenes, usa Next.js Image
   import Image from 'next/image'
   
   <Image
     src="/logo.png"
     alt="Magic-Lum Logo"
     width={120}
     height={40}
     priority
   />
   ```

### SEO

1. **Verificar Sitemap**:
   ```
   https://tu-dominio.com/sitemap.xml
   ```

2. **Google Search Console**:
   ```
   1. search.google.com/search-console
   2. Add Property: https://tu-dominio.com
   3. Submit Sitemap: https://tu-dominio.com/sitemap.xml
   ```

3. **Meta Tags**:
   ```tsx
   // Verificar en app/layout.tsx
   title: 'Magic-Lum | Reemplaza Tu Publicidad por Luz Sin Residuos'
   description: 'Landing page optimizada para conversión'
   ```

### Seguridad

1. **Headers de Seguridad**:
   ```json
   // Verificar en vercel.json
   "X-Content-Type-Options": "nosniff"
   "X-Frame-Options": "DENY"
   "X-XSS-Protection": "1; mode=block"
   ```

2. **HTTPS Redirect**:
   ```
   Vercel automáticamente redirige HTTP → HTTPS
   ```

## 📈 Monitoreo y Mantenimiento

### Alertas y Monitoring

1. **Vercel Monitoring**:
   ```
   Analytics → Functions
   Verifica errores 4xx/5xx
   Monitorea tiempo de respuesta
   ```

2. **UptimeRobot** (Opcional):
   ```
   1. uptimerobot.com
   2. New Monitor: https://tu-dominio.com
   3. Email alerts si el sitio está down
   ```

### Métricas de Conversión

1. **KPIs a Monitorear**:
   ```
   - Tasa de conversión (formularios enviados / visitantes)
   - Tiempo en página
   - Bounce rate
   - Fuentes de tráfico más convertidoras
   ```

2. **Google Analytics Goals**:
   ```
   1. Admin → Goals
   2. Create Goal: Demo Request
   3. Type: Event
   4. Event: demo_request_completed
   ```

### Actualizaciones

1. **Deploy Automático**:
   ```bash
   # Cada push a main despliega automáticamente
   git push origin main
   ```

2. **Preview Deployments**:
   ```bash
   # Cada PR crea un preview
   git checkout -b feature/mejora-cta
   git push origin feature/mejora-cta
   # → Vercel crea preview URL automáticamente
   ```

3. **Rollback**:
   ```
   1. Vercel Dashboard → Deployments
   2. Click en deployment anterior
   3. "Promote to Production"
   ```

## 🚨 Troubleshooting

### Problemas Comunes

1. **Build Falla**:
   ```bash
   # Verificar localmente
   npm run build
   
   # Revisar logs en Vercel
   Dashboard → Functions → View Function Logs
   ```

2. **Variables de Entorno No Funcionan**:
   ```bash
   # Verificar prefijo NEXT_PUBLIC_ para variables del cliente
   # Redeploy después de cambiar variables
   ```

3. **Formulario No Envía**:
   ```bash
   # Verificar endpoint en DemoModal.tsx
   # Verificar CORS en el servicio
   # Revisar console del navegador
   ```

4. **Dominio No Resuelve**:
   ```bash
   # Verificar DNS records
   dig magic-lum.cl
   
   # Verificar en Vercel
   Settings → Domains → Refresh
   ```

## 📞 Soporte Post-Deploy

### Contactos de Emergencia

- **Vercel Support**: support@vercel.com
- **DNS Issues**: Contactar provider (Cloudflare, etc.)
- **Desarrollo**: hola@magic-lum.cl

### Recursos Útiles

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Performance Tips**: https://web.dev/performance/

---

**🚀 ¡Tu landing page de alta conversión está lista para generar leads!**

**Monitorea las métricas constantemente y optimiza basado en datos reales de usuario.**