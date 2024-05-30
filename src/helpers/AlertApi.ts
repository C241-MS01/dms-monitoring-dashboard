// helpers / AlertApi.ts;
import axios from "axios";

const API_URL = "http://localhost:8080/bwa-asset-management/alert/read.php"; // Replace with your actual API URL

export interface Alert {
  alertId: string;
  timestamp: string; // Ensure this matches the format returned by your API
  vehicleId: string;
  status: string;
}

export const fetchAlerts = async (): Promise<Alert[]> => {
  try {
    const response = await axios.get<{ status: boolean; data: Alert[] }>(
      API_URL
    );
    console.log("API response:", response.data); // Add log to check the response
    if (response.data.status) {
      return response.data.data.map((alert) => ({
        alertId: alert.alertId,
        timestamp: alert.timestamp, // Ensure time is included here
        vehicleId: alert.vehicleId,
        status: alert.status,
      }));
    } else {
      console.error("Error in API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching alerts:", error);
    return [];
  }
};

fetchAlerts().then((alerts) => {
  console.log("Alerts:", alerts);
});
