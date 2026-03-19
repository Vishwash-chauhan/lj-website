import { getServiceMetadata } from '../serviceData'
import ServicePageShell from '../ServicePageShell'

export const metadata = getServiceMetadata('boxes')

export default function FoodBoxesPage() {
  return <ServicePageShell serviceKey="boxes" />
}