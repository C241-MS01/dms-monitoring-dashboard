// api.ts

// Fungsi untuk login pengguna dan mendapatkan token JWT dari server
export const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<string> => {
  try {
    // Kirim permintaan HTTP POST ke endpoint login di server
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    // Ambil token JWT dari respon
    const data = await response.json();
    return data.token;
  } catch (error) {
    // Periksa tipe data error sebelum mengakses properti message
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};

// Fungsi untuk logout pengguna
export const logoutUser = async (): Promise<void> => {
  try {
    // Kirim permintaan HTTP POST ke endpoint logout di server
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Sertakan token JWT dalam header
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    // Hapus token JWT dari Local Storage
    localStorage.removeItem("token");
  } catch (error) {
    // Periksa tipe data error sebelum mengakses properti message
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
