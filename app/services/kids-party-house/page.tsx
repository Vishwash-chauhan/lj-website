import { getServiceMetadata } from '../serviceData'
import ServicePageShell from '../ServicePageShell'

export const metadata = getServiceMetadata('venue')

export default function KidsPartyHousePage() {
  return <ServicePageShell serviceKey="venue" />
}