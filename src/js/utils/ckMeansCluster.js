import ckmeans from 'ckmeans';

import 'core-js/fn/array/find-index'; // ie fix

const ckMeansCluster = (topics, number) => {

    const onedimension = topics.map((id, volume) => volume);
    const boundaries = ckmeans(onedimension, number).reverse();
    return topics.map(topic => {
        return {
            ...topic,
            group: number - boundaries.findIndex(num => num < topic.volume),
        }
    });

}

export default ckMeansCluster;