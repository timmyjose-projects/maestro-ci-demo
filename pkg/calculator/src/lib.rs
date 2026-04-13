pub fn add(x: i32, y: i32) -> i32 {
    x + y
}

pub fn sub(x: i32, y: i32) -> i32 {
    x - y
}

pub fn mul(x: i32, y: i32) -> i32 {
    x * y
}

pub fn div(x: i32, y: i32) -> i32 {
    if y == 0 {
        0
    } else {
        x / y
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(5, add(2, 3));
    }

    #[test]
    fn test_sub() {
        assert_eq!(-1, sub(2, 3));
    }

    #[test]
    fn test_mul() {
        assert_eq!(6, mul(2, 3));
    }
    #[test]
    fn test_div() {
        assert_eq!(2, div(6, 3));
        assert_eq!(0, div(2, 0));
        assert_eq!(0, div(2, 3));
    }
}
