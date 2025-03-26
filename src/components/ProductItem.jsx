import {Link} from 'react-router'


function ProductItem({ product }){
    return(
        <section className="pt-4 px-3 lg:px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
            <div className="border border-gray-500 rounded overflow-hidden">
                <Link to={`/product/ID/${product.ID}`}>
                    <img 
                        style={{ width:'100%',aspectRatio: '2 / 3', objectFit: 'cover' }}
                        src={product.cover}
                        alt={product.title}
                    />
                </Link>
                <div className="p-4">
                    <h2 className="text-white mb-1 font-bold text-center text-xl"> 
                        {product.title}
                    </h2>
                    <h6 className="text-white opacity-80 mb-3 text-center">
                        {product.author}
                    </h6>
                    <p className="text-white text-sm opacity-70 mb-3 mx-3 line-clamp-3">
                        {product.summary}
                    </p>
                    <div className="flex justify-between flex-wrap mb-3 mx-3">
                        <Link to={`/product/ID/${product.ID}`} style={{color: '#6366F2'}}>
                            See More
                        </Link>
                        <span className='text-white opacity-70'>
                            {product.price}.00
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductItem;