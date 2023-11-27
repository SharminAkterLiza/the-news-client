import img1 from '../../../assets/rightZoneImg!.jpg';
import img2 from '../../../assets/rightZoneImg2.jpg';
import img3 from '../../../assets/rightZoneImg3.jpg';
const PZone = () => {
    return (
        <div className="text-center my-4 py-4">
         <h4 className='mb-2 mx-auto'>Popular Zone</h4>   
         <div>
            <div>
            <img src={img1} alt="" />
            <h6>Dishes</h6>
            </div>
            <div>
            <img src={img2} alt="" />
            <h6>Honey</h6>
            </div>
            <div>
            <img src={img3} alt="" />
            <h6>Art</h6>
            </div>
        

        </div>
        </div>
    );
};

export default PZone;