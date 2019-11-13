import React, {Component} from "react";
import './aboutCss.css';

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    render() {
        console.log("data:" + JSON.stringify(this.state.dataSource));
        return (
            <div className='container'>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        About
                    </h2>
                </section>
                <div className='content1'>
                    <div className='left'>
                        <h3 className='titleLeft'>Our Story</h3>
                        <p className="textLeft">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim,
                            non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                            tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus
                            ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue.
                            Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis
                            diam faucibus et. Morbi a tempor elit.
                        </p>
                        <p className="textLeft">
                            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna.
                            Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
                            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu
                            sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend
                            elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit
                            convallis ipsum, et maximus enim ligula ac ligula.
                        </p>
                        <p className="textLeft">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call
                            us on (+1) 96 716 6879
                        </p>
                    </div>
                    <div className='right'>
                        <div className='borderImage'>
                            <div className='hoverImage'>
                                <img
                                    src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    className='imageRight'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content2'>
                    <div className='leftContent2'>
                        <h3 className='titleLeft2'>Our Mission</h3>
                        <p className="stext-113 cl6 p-b-26">
                            Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed
                            consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida.
                            Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac
                            velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in,
                            porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque
                            tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris
                            auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget
                            elementum libero iaculis.
                        </p>
                        <div className="bor16 p-l-29 p-b-9 m-t-22">
                            <p className="stext-114 cl6 p-r-40 p-b-11">
                                Creativity is just connecting things. When you ask creative people how they did
                                something, they feel a little guilty because they didn't really do it, they just saw
                                something. It seemed obvious to them after a while.
                            </p>
                            <span className="stext-111 cl8">- Steve Job’s </span>
                        </div>
                    </div>
                    <div className='rightContent2'>
                        <div className='borderImage2'>
                            <div className='hoverImage'>
                                <img
                                    src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    className='imageRight'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
