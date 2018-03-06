import ckmeans from 'ckmeans';

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