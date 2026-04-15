use actix_web::{get, post, web};
use serde::{Deserialize, Serialize};

use crate::calc::{add, div, mul, sub};

#[derive(Debug, Clone, Serialize)]
pub struct HealthStatus {
    status: String,
}

#[get("/health")]
pub async fn health() -> actix_web::Result<web::Json<HealthStatus>> {
    Ok(web::Json(HealthStatus {
        status: String::from("ok"),
    }))
}

#[derive(Debug, Copy, Clone, Deserialize)]
pub struct CalcInput {
    x: f64,
    y: f64,
}

#[derive(Debug, Copy, Clone, Serialize)]
pub struct CalcOutput {
    res: f64,
}

#[post("/add")]
pub async fn handle_add(body: web::Json<CalcInput>) -> actix_web::Result<web::Json<CalcOutput>> {
    let (x, y) = (body.x, body.y);
    let res = add(x, y);

    Ok(web::Json(CalcOutput { res: res }))
}

#[post("/sub")]
pub async fn handle_sub(body: web::Json<CalcInput>) -> actix_web::Result<web::Json<CalcOutput>> {
    let (x, y) = (body.x, body.y);
    let res = sub(x, y);

    Ok(web::Json(CalcOutput { res: res }))
}

#[post("/mul")]
pub async fn handle_mul(body: web::Json<CalcInput>) -> actix_web::Result<web::Json<CalcOutput>> {
    let (x, y) = (body.x, body.y);
    let res = mul(x, y);

    Ok(web::Json(CalcOutput { res: res }))
}

#[post("/div")]
pub async fn handle_div(body: web::Json<CalcInput>) -> actix_web::Result<web::Json<CalcOutput>> {
    let (x, y) = (body.x, body.y);
    let res = div(x, y);

    Ok(web::Json(CalcOutput { res: res }))
}
