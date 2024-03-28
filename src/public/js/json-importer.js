export async function importJSON({ path, number }) {
    const response = await fetch(path);
    const json = await response.json();

    console.log(number);
    return json.slice(0, number);
}
