import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Skeletons = () => {
    return (
    <div className='card-item'>
        <Skeleton circle={false} height={100} width={100}></Skeleton>
        <h2><Skeleton/></h2>
        <h2><Skeleton/></h2>
        <h2><Skeleton/></h2>
        <h2><Skeleton/></h2>
    </div>
    )
}

export default Skeletons;
