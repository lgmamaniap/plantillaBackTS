import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send({ verification: "API is working correctly..."})
})

export { router }