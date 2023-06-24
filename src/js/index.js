let activeIndex = 0;

const groups = document.getElementsByClassName('group');

const nextClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length -
    1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`
        [data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`
        [data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "after";
        nextGroup.dataset.status = "active__from_before";

        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex = nextIndex;
        });
}

const prevClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex- 1 : groups.length - 1;

    const currentGroup = document.querySelector(`
        [data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`
        [data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "before";
        nextGroup.dataset.status = "active__from_after";

        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex = nextIndex;
        });
}