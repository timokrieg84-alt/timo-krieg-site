import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // In real use, integrate SMTP provider here. For preview, just accept and redirect.
    if (request.headers.get('content-type')?.includes('application/json')) {
      const data = await request.json();
      console.log('contact:json', data);
    } else {
      const form = await request.formData();
      console.log('contact:form', Object.fromEntries(form));
    }
    return redirect('/danke', 303);
  } catch (e) {
    return new Response('Bad Request', { status: 400 });
  }
};
