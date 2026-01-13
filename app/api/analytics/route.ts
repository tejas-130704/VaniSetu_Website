export async function POST(request: Request) {
  try {
    const { metricType } = await request.json()

    // Mock data for awareness metrics
    const awarenessData = [
      {
        month: "Jan",
        awareness_percentage: 25,
        beneficiaries_reached: 2500,
        states_covered: 5,
        villages_reached: 150,
      },
      {
        month: "Feb",
        awareness_percentage: 32,
        beneficiaries_reached: 4200,
        states_covered: 7,
        villages_reached: 280,
      },
      {
        month: "Mar",
        awareness_percentage: 42,
        beneficiaries_reached: 6800,
        states_covered: 9,
        villages_reached: 450,
      },
      {
        month: "Apr",
        awareness_percentage: 55,
        beneficiaries_reached: 9500,
        states_covered: 12,
        villages_reached: 680,
      },
      {
        month: "May",
        awareness_percentage: 68,
        beneficiaries_reached: 14200,
        states_covered: 15,
        villages_reached: 950,
      },
      {
        month: "Jun",
        awareness_percentage: 78,
        beneficiaries_reached: 19800,
        states_covered: 18,
        villages_reached: 1250,
      },
      {
        month: "Jul",
        awareness_percentage: 85,
        beneficiaries_reached: 25600,
        states_covered: 20,
        villages_reached: 1620,
      },
      {
        month: "Aug",
        awareness_percentage: 88,
        beneficiaries_reached: 32100,
        states_covered: 22,
        villages_reached: 2050,
      },
      {
        month: "Sep",
        awareness_percentage: 90,
        beneficiaries_reached: 38500,
        states_covered: 24,
        villages_reached: 2480,
      },
      {
        month: "Oct",
        awareness_percentage: 92,
        beneficiaries_reached: 44200,
        states_covered: 26,
        villages_reached: 2850,
      },
      {
        month: "Nov",
        awareness_percentage: 94,
        beneficiaries_reached: 48900,
        states_covered: 27,
        villages_reached: 3120,
      },
      {
        month: "Dec",
        awareness_percentage: 95,
        beneficiaries_reached: 52400,
        states_covered: 28,
        villages_reached: 3350,
      },
    ]

    // Mock data for performance metrics
    const performanceData = [
      {
        month: "Jan",
        voice_quality_score: 0.72,
        accuracy_rate: 78,
        call_success_rate: 82,
        processing_time_ms: 1850,
        languages_supported: 6,
      },
      {
        month: "Feb",
        voice_quality_score: 0.76,
        accuracy_rate: 81,
        call_success_rate: 84,
        processing_time_ms: 1720,
        languages_supported: 7,
      },
      {
        month: "Mar",
        voice_quality_score: 0.79,
        accuracy_rate: 83,
        call_success_rate: 85,
        processing_time_ms: 1650,
        languages_supported: 8,
      },
      {
        month: "Apr",
        voice_quality_score: 0.82,
        accuracy_rate: 85,
        call_success_rate: 87,
        processing_time_ms: 1550,
        languages_supported: 9,
      },
      {
        month: "May",
        voice_quality_score: 0.84,
        accuracy_rate: 87,
        call_success_rate: 88,
        processing_time_ms: 1450,
        languages_supported: 10,
      },
      {
        month: "Jun",
        voice_quality_score: 0.86,
        accuracy_rate: 88,
        call_success_rate: 89,
        processing_time_ms: 1350,
        languages_supported: 11,
      },
      {
        month: "Jul",
        voice_quality_score: 0.88,
        accuracy_rate: 89,
        call_success_rate: 90,
        processing_time_ms: 1250,
        languages_supported: 12,
      },
      {
        month: "Aug",
        voice_quality_score: 0.89,
        accuracy_rate: 91,
        call_success_rate: 91,
        processing_time_ms: 1150,
        languages_supported: 13,
      },
      {
        month: "Sep",
        voice_quality_score: 0.91,
        accuracy_rate: 92,
        call_success_rate: 92,
        processing_time_ms: 1050,
        languages_supported: 14,
      },
      {
        month: "Oct",
        voice_quality_score: 0.93,
        accuracy_rate: 93,
        call_success_rate: 93,
        processing_time_ms: 950,
        languages_supported: 15,
      },
      {
        month: "Nov",
        voice_quality_score: 0.95,
        accuracy_rate: 94,
        call_success_rate: 94,
        processing_time_ms: 850,
        languages_supported: 16,
      },
      {
        month: "Dec",
        voice_quality_score: 0.97,
        accuracy_rate: 95,
        call_success_rate: 95,
        processing_time_ms: 750,
        languages_supported: 17,
      },
    ]

    const data = metricType === "performance" ? performanceData : awarenessData

    return Response.json({ data }, { status: 200 })
  } catch (error) {
    console.error("Analytics error:", error)
    return Response.json({ error: "Failed to generate analytics data" }, { status: 500 })
  }
}
