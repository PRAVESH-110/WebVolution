import { apiEndpoints } from "./api";


export async function scanRequest(url: string) {
  const token = localStorage.getItem("token")
  const response = await fetch(apiEndpoints.scan.create, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ url })
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || "Failed to create scan");
  }

  return response.json(); // { scanId, status }
}

export async function getScanById(token: string, scanId: string) {
  const res = await fetch(apiEndpoints.scan.getById(scanId), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to get scan response");
  }

  return res.json();
}
