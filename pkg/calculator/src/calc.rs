use log::info;

pub(crate) fn add(x: f64, y: f64) -> f64 {
    info!("Adding {x} and {y}");
    x + y
}

pub(crate) fn sub(x: f64, y: f64) -> f64 {
    info!("Subtracting {y} from {x}");
    x - y
}

pub(crate) fn mul(x: f64, y: f64) -> f64 {
    info!("Multiplying {x} and {y}");
    x * y
}

pub(crate) fn div(x: f64, y: f64) -> f64 {
    info!("Dividing {x} by {y}");
    if (y - 0.0).abs() < f64::EPSILON {
        0.0
    } else {
        x / y
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(5.0, add(2.0, 3.0));
    }

    #[test]
    fn test_sub() {
        assert_eq!(-1.0, sub(2.0, 3.0));
    }

    #[test]
    fn test_mul() {
        assert_eq!(6.0, mul(2.0, 3.0));
    }
    #[test]
    fn test_div() {
        assert_eq!(2.0, div(6.0, 3.0));
        assert_eq!(0.0, div(2.0, 0.0));
        assert_eq!(0.0, div(2.0, 3.0));
    }
}
