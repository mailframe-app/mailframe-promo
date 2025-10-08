import type { NextApiRequest, NextApiResponse } from 'next'

interface HealthResponse {
	status: 'ok'
	timestamp: string
	uptime: number
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<HealthResponse>
) {
	res.status(200).json({
		status: 'ok',
		timestamp: new Date().toISOString(),
		uptime: process.uptime()
	})
}
