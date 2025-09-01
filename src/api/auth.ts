export async function fetchUsersData() {
    try {
      const res = await fetch(`${import.meta.env.VITE_USERS_API}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    } catch (err) {
      console.log(`Error while fetching data ${err}`);
    }
  }