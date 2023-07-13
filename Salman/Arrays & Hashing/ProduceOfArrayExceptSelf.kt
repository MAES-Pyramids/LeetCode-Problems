fun productExceptSelf(nums: IntArray): IntArray {
    val res = mutableListOf<Int>()
    var zeroCount = 0
    var total = 1

    for (num in nums) {
        if (num == 0) {
            zeroCount++
            total = if (zeroCount > 1)
                0
            else
                total
        } else {
            if (zeroCount > 1) {
                total = 0
            } else {
                total *= num
            }
        }
    }
    
    for (num in nums) {
        if (num != 0) {
            if (zeroCount > 0) {
                res.add(0)
            } else {
                res.add(total / num)
            }
        } else {
            res.add(total)
        }
    }
