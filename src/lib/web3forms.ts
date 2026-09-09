const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

export async function submitWeb3Form(
  fields: Record<string, FormDataEntryValue>,
): Promise<boolean> {
  const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("WEB3FORMS_ACCESS_KEY is not configured");
  }

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...fields,
    }),
  });

  return response.ok;
}
