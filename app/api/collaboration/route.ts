import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Collaboration request body received:', body)

    // Build query parameters for forwarding to n8n
    const params = new URLSearchParams()

    // Exact mapping for all new fields
    params.append('collabType', body.collabType || '')
    params.append('businessName', body.businessName || '')
    params.append('contactPerson', body.contactPerson || '')
    params.append('phone', body.phone || '')
    params.append('email', body.email || '')
    params.append('location', body.location || '')
    params.append('aboutSpace', body.aboutSpace || '')
    params.append('lookingFor', body.lookingFor || '')
    params.append('spaceType', body.spaceType || '')
    params.append('capacity', body.capacity || '')
    params.append('availability', body.availability || '')
    params.append('socialLink', body.socialLink || '')
    params.append('additionalInfo', body.additionalInfo || '')

    // Backwards compatibility fallbacks for existing webhook configurations:
    params.append('name', body.contactPerson || body.businessName || '')
    params.append('organization', body.businessName || '')
    params.append('phone', body.phone || '')
    params.append('type', body.collabType || '')

    const messages = []
    if (body.aboutSpace) messages.push(`About Space/Brand: ${body.aboutSpace}`)
    if (body.lookingFor) messages.push(`Looking for: ${body.lookingFor}`)
    if (body.spaceType) messages.push(`Space Type: ${body.spaceType}`)
    if (body.capacity) messages.push(`Approx Capacity: ${body.capacity}`)
    if (body.availability) messages.push(`Availability: ${body.availability}`)
    if (body.socialLink) messages.push(`Insta/Web: ${body.socialLink}`)
    if (body.additionalInfo) messages.push(`Additional Info: ${body.additionalInfo}`)

    params.append('message', messages.join(' | '))

    // Forward to n8n webhook using GET (production endpoint)
    const webhookUrl = `https://n8n.littlejalebis.com/webhook/967397a6-d90c-43dc-b001-8552e3827c1e?${params.toString()}`

    console.log('Forwarding request to webhook:', webhookUrl)

    const response = await fetch(webhookUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Webhook response status:', response.status)
    const responseText = await response.text()
    console.log('Webhook response:', responseText)

    if (!response.ok) {
      console.error(`Webhook error - Status: ${response.status}, Body: ${responseText}`)
      throw new Error(`Webhook responded with status: ${response.status}`)
    }

    return NextResponse.json(
      { success: true, message: 'Collaboration request sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Collaboration API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { success: false, message: `Failed to send collaboration request: ${errorMessage}` },
      { status: 500 }
    )
  }
}
