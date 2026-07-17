import { getServiceMetadata } from '../serviceData'
import ServicePageShell from '../ServicePageShell'

export const metadata = getServiceMetadata('venue')

export default function ThemedPartyVenuePage() {
  return <ServicePageShell serviceKey="venue" />
}
