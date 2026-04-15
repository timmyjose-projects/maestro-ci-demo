use std::env;

use actix_web::{App, HttpServer};
use calculator::handlers::{handle_add, handle_div, handle_mul, handle_sub, health};
use log::info;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    unsafe {
        env::set_var("RUST_LOG", "INFO");
    }
    env_logger::init();

    info!("Starting server on localhost:9999");

    HttpServer::new(move || {
        App::new()
            .service(health)
            .service(handle_add)
            .service(handle_sub)
            .service(handle_mul)
            .service(handle_div)
    })
    .bind(("0.0.0.0", 9999))?
    .run()
    .await
}
