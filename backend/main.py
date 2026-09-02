from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import replicate
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.environ["REPLICATE_API_TOKEN"] = "YOUR_REPLICATE_API_TOKEN_HERE"

class TryOnRequest(BaseModel):
    human_image_url: str
    garment_image_url: str
    category: str = "upper_body"

@app.post("/api/virtual-try-on")
async def run_try_on(data: TryOnRequest):
    try:
        output = replicate.run(
            "cuuupid/idm-vton:c87242c7385644d7b07fde0584f017d3813c9360f73f843e9868f000b0d39369",
            input={
                "human_img": data.human_image_url,
                "garm_img": data.garment_image_url,
                "garment_des": "clothing item",
                "category": data.category,
                "is_checked": True,
                "is_checked_crop": False,
                "denoise_steps": 30,
                "seed": 42
            }
        )
        return {"output_image_url": output}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))