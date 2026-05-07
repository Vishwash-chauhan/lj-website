import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Collaboration request body:', body)

    // Build query parameters
    const params = new URLSearchParams()
    params.append('name', body.name || '')
    params.append('organization', body.organization || '')
    params.append('phone', body.phone || '')
    params.append('type', body.type || '')
    params.append('message', body.message || '')

    // Forward to n8n webhook using GET (production endpoint)
    const webhookUrl = `https://n8n.vyaapaarniti.com/webhook/967397a6-d90c-43dc-b001-8552e3827c1e?${params.toString()}`
    
    console.log('Sending to webhook:', webhookUrl)
    
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
