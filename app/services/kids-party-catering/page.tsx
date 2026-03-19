import { getServiceMetadata } from '../serviceData'
import ServicePageShell from '../ServicePageShell'

export const metadata = getServiceMetadata('catering')

export default function KidsPartyCateringPage() {
  return <ServicePageShell serviceKey="catering" />
}