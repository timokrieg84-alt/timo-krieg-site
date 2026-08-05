import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    // Basic honeypot check
    if (data.website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }
    // In production, send email or store ticket here.
    console.log('Kontaktanfrage:', data);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }
};
