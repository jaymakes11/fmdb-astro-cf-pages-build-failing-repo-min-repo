const ScriptName = "/all-the-p/script.js";

const ScriptWithoutExtension = ScriptName.replace(".js", "");

export async function GET({ request }) {
   const pathname = new URL(request.url).pathname;
   const [baseUri, ...extensions] = pathname.split(".");

   if (baseUri.endsWith(ScriptWithoutExtension)) {
      const response = await fetch(
         "https://plausible.io/js/plausible." + extensions.join(".")
      );
      return response;
   } else {
      return new Response(null, { status: 404 });
   }
}

// Handles requests to '/all-the-p/event'
export async function POST({ request }) {
   const requestForPlausible = new Request(request);

   requestForPlausible.headers.delete("cookie");

   return await fetch("https://plausible.io/api/event", requestForPlausible);
}
