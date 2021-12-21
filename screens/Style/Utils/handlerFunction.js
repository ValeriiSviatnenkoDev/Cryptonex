/*
 *
 * For media screens 
 * 
*/

export function handlerHeight(screen, arg) {
    if(screen > 690) {
        return (screen * arg) + 20;
    }

    return (screen * 0.9) - arg;
}

export function handlerMarginTop(screen) {
    if(screen > 690) {
        return 80;
    }

    return 65;
}


