import { redirect } from 'next/navigation'

import { SERVICE_KEY_BY_LEGACY_TAB, getServicePath } from './serviceData'

interface ServicesPageProps {
  searchParams?: Promise<{
    tab?: string | string[]
  }>
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = searchParams ? await searchParams : undefined
  const requestedTab = Array.isArray(params?.tab) ? params?.tab[0] : params?.tab
  const serviceKey = requestedTab ? SERVICE_KEY_BY_LEGACY_TAB[requestedTab] : 'catering'

  redirect(getServicePath(serviceKey ?? 'catering'))
}