import { Center } from '@chakra-ui/react';
import React from 'react';
import "./Main.css";

export default function Main() {
  return (
    <div>
        <div id="top-links">
            <p>MEN</p>
            <p>WOMEN</p>
            <p>ACCESSORIES</p>
        </div>

        <div id="section-1">
            <img src="https://images.bewakoof.com/uploads/grid/app/1x1-jumbo-prints-common-02-1677000028.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/static-1x1-Polo-01-1677000030.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/1x1-tshirt-dresses-1677000030.jpg" alt="" />
            {/* <img src="https://images.bewakoof.com/uploads/grid/app/joggers--1--1676971650.jpg" alt="" /> */}
        </div>

        <div id="section-2">
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="" />
        </div>

        <div id="section-3">
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-D-230x320-bestsellers-1676881692.jpg" alt="" />
                <p>Bestsellers</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-new-arrivals-1674817171.jpg" alt="" />
                <p>New Arrivals</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg" alt="" />
                <p>Hot Deals</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt="" />
                <p>Official Collaborations</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/vote-thumbnail-1668508339.jpg" alt="" />
                <p>Vote for Designs</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="" />
                <p>Last Sizes Left</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt="" />
                <p>Plus Size</p>
            </div>
            <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg" alt="" />
                <p>Customization</p>
            </div>
            {/* <div className="section-3-card">
                <img src="https://images.bewakoof.com/uploads/grid/app/image-1668598708.png" alt="" />
                <p>Coupon Offers</p>
            </div> */}
        </div>

        <div id="section-4">
            <Center>
                <p className="heading1">DESIGNS OF THE WEEK</p>
            </Center>

            <div id="section-4-img">
                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1676955702.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1676955702.jpg" alt="" />
            </div>
        </div>

        <div id="section-5">
            <Center>
                <p className="heading1">TRENDING CATEGORIES</p>
            </Center>

            <div className="section-5-cards-container">
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-Printed-Tshirt--1--1675842429.png" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-D-240x350-ovrszd-1676537032.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/vests-category-icon-1675844905.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261-1676129954.jpg" alt="" />
                </div>
            </div>

            <div className="section-5-cards-container">
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-ovrszd-w-1676463439.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-w-dresses-1675144062.jpg" alt="" />
                </div>
                <div className="section-5-card">
                    <img src="https://images.bewakoof.com/uploads/grid/app/category-box-boyfriend-tees-1675319582.jpg" alt="" />
                </div>
            </div>
        </div>

        <div id="section-6">
            {/* <Center>
                <p className="heading2">BIGGEST DEALS!</p>
            </Center> */}
        </div>

        <div id="section-7">
            <Center>
                <p className="heading1">TOO HOT TO BE MISSED</p>
            </Center>

            <div id="section-7-images">
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-b3at999-1676885542.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-BTS-01-1677128271.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-MEN-VEST-02-1676611750.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/1x1-The-Ultimate-Joggers-common--1--1676898158.gif" alt="" />
            </div>
        </div>

        <div id="section-8">
            <Center>
                <p className="heading1">CATEGORIES TO BAG</p>
            </Center>

            <div id="section-8-images">
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-w-pyjamas-2-1675144063.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png" alt="" />
            </div>
        </div>

        <div id="section-9">
            <img src="https://images.bewakoof.com/uploads/grid/app/oversized-tee-new--1--1676901314.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/static-1x1-LimitedOffer-04-1676028999.jpg" alt="" />
            <img src="https://images.bewakoof.com/uploads/grid/app/full-sleeve-banner-2-1676443809.jpg" alt="" />
            {/* <img src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-GraphicBags-01-1676555256.jpg" alt="" /> */}
        </div>

        <div id="section-10">
            <img src="https://images.bewakoof.com/uploads/grid/app/desktop-survey-1673330211.jpg" alt="" />
        </div>

        <div id="section-11">
            <Center>
                <p className="heading1">TOP ACCESSORIES</p>
            </Center>

            <div id="section-11-images">
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png" alt="" />
            </div>
        </div>

        <div id="section-12">
            <Center>
                <p className="heading1">OUT BEST PICKS</p>
            </Center>

            <div id="section-12-images">
                <img src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-boyfriendtees-1674483112.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/MIdSizeBanner-TrendyToppers-1676223605.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg" alt="" />
                <img src="https://images.bewakoof.com/uploads/grid/app/midsizebanner-common-jeans-1675666577.jpg" alt="" />
            </div>
        </div>

        <div id="section-13">
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="" />
        </div>

        <div id="section-14">
            <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="" />
        </div>
    </div>
  )
}
