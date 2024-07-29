function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const totalLen = m + n;

    if (totalLen % 2 === 1) {
        return findKthSmallest(nums1, nums2, Math.floor(totalLen / 2) + 1);
    } else {
        return (findKthSmallest(nums1, nums2, Math.floor(totalLen / 2)) + findKthSmallest(nums1, nums2, Math.floor(totalLen / 2) + 1)) / 2;
    }
}

function findKthSmallest(nums1, nums2, k) {
    if (nums1.length === 0) {
        return nums2[k - 1];
    }
    if (nums2.length === 0) {
        return nums1[k - 1];
    }
    if (k === 1) {
        return Math.min(nums1[0], nums2[0]);
    }

    const i = Math.min(Math.floor(k / 2), nums1.length);
    const j = Math.min(Math.floor(k / 2), nums2.length);

    if (nums1[i - 1] < nums2[j - 1]) {
        return findKthSmallest(nums1.slice(i), nums2, k - i);
    } else {
        return findKthSmallest(nums1, nums2.slice(j), k - j);
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));