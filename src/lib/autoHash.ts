import { goto } from '$app/navigation';

export function autoHash(node: HTMLElement): { destroy: () => void } {
    const observer = new IntersectionObserver(callback, {
        threshold: 1.0, // Trigger when 100% of the element is in view
        rootMargin: '0px 0px 50px 0px', // Add some margin at the bottom to allow for triggering even when near the bottom
    });

    observer.observe(node);

    function callback(entries: IntersectionObserverEntry[]) {
        const entry = entries.find(entry => entry.isIntersecting);

        if (entry) {
            const id = entry.target.id;

            // Ensure we're not trying to update the hash to the same value
            if (window.location.hash !== `#${id}`) {
                // Manually prevent default scroll behavior by setting the hash without scrolling
                history.pushState(null, '', `#${id}`);

                // Trigger the navigation without scrolling
                goto(`#${id}`, { replaceState: true, noScroll: true });
            }
        }
    }

    // Cleanup when the node is destroyed
    return { destroy: () => observer.disconnect() };
}