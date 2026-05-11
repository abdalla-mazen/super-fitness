import api from "@/axiosConfig";

export async function getWorkoutsMuscleGroups() {
  try {
    const response = await api.get("/muscles", {
      headers: {
        "accept-language": "en",
      },
    });

    if (response.status !== 200) {
      throw new Error("Something went wrong error deticted in the client");
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log("Error fetching workouts muscle groups:", error);
  }
}

export async function getWorkoutsByMuscleGroup(id: string) {
  try {
    const response = await api.get(`/musclesGroup/${id}`, {
      headers: {
        "accept-language": "en",
      },
    });

    if (response.status !== 200) {
      throw new Error("Something went wrong error deticted in the client");
    }

    const data = response.data;

    return data;
  } catch (error) {
    console.log("Error fetching workouts by muscle group:", error);
  }
}
