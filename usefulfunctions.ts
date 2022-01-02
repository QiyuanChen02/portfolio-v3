export const linkTo = (e: React.MouseEvent) => {
    const targetLocation = e.target as HTMLElement;
    if (targetLocation.dataset.location) {
        window.location.href = targetLocation.dataset.location;
    }
}

export const reloadPage = () => {
    window.location.reload();
}

type Options = {
    threshold: number,
    rootMargin: string
}

export const getIntersectionObserver = (options: Options) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, options);
};