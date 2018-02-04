export default (count=0, action) => {
    const {type} = action;
    console.log('type', type); // good!

    switch (type) {
        case 'INCREMENT': return count + 1;
    }

    return count
}
