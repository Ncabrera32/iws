import Layout from '../../components/Layout';
import styles from '../../styles/ProjectPage.module.css';
import ProjectTab from '../../components/ProjectTab';
import PartnershipSection from '../../components/PartnershipSection';
import Services from '../../components/Services';
import ImageGallery from '../../components/ImageGallery';
import ThumbnailGallery from '../../components/ThumbnailGallery';

const images = [
    '/images/ClearfieldHp.jpg',
    '/images/Clearfield-33.jpg',
    '/images/WestSquare/Clearfield-34.jpg',
    '/images/WestSquare/Clearfield-5.jpg',
    '/images/WestSquare/Clearfield-30.jpg',
    '/images/WestSquare/Clearfield-31.jpg',
];

export default function Project() {
    return (
        <Layout pageTitle="Project">
            <div className={styles.serviceDetail}>
                <ThumbnailGallery images={images} />    
                </div>
            <ProjectTab>
            <div label="About the Project">
                    <h3>About the Project</h3>
                    <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                    <ol>
                        <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                        <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                        <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                        <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                    </ol>
                    </div>
                <div label="Compliance and Documentation">     
                    <h3>Compliance and Documentation</h3>
                        <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                        <ol>
                            <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                            <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                        </ol>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                    </div>
                <div label="Site Planning and Layout">
                    <h3>Site Planning and Layout</h3>
                        <p>General contracting is your all-in-one solution for building and renovation projects. We handle all aspects, including planning, procurement, and execution.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit feugiat morbi accumsan odio luctus ut quam senectus hendrerit convallis dui aenean mauris ut felis in tellus leo lacus sit molestie et augue orci, tortor magna malesuada orci id lorem ultrices sapien. id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Ut id posuere dui, id commodo leo. Aenean malesuada arcu dolor sollicitudin, venenatis justo ac, mattis ex. Ut id posuere dui, id commodo leo. Lorem ipsum dolor set amet lorem ipsum dolor sit</p>
                        <ol>
                            <li>Neque sodales ut etiam sit amet nisl purus non tellus orci.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra.</li>
                            <li>Mauris commodo quis imperdiet massa tincidunt nunc.</li>
                            <li>Adipiscing elit ut aliquam purus sit amet viverra suspendisse.</li>
                        </ol>
                    </div>
            </ProjectTab>
            <PartnershipSection />
        </Layout>
    );
}