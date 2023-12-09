export const getAllFAQs =  async () => {
    const res = await fetch("http://localhost:3001/")
    return await res.json()
}