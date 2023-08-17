import renderer from 'react-test-renderer';
import Quote from '../components/Quote/Quote';

describe('Qoute Component',()=>{
    it('Should create a Qoute component Snapshot',()=>{
        const tree = renderer.create(<Quote/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})