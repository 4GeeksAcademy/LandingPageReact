import React from "react";

//create your first component
function Card() {
	return (
		<div className="container-fluid mt-3">
			<div className="row">
				<div className="col-sm-3 mb-3 mb-sm-0">
					<div className="card">
						<img src="https://picsum.photos/id/237/400/200" className="card-img-top img-fluid" alt="..." />
						<div className="card-body text-center">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-footer bg-tertiary text-center">
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>

				</div>
				<div className="col-sm-3 mb-3 mb-sm-0">
					<div className="card">
						<img src="https://picsum.photos/id/11/400/200" className="card-img-top img-fluid" alt="..." />
						<div className="card-body text-center">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-footer bg-tertiary  text-center">
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>

				</div>

				<div className="col-sm-3 mb-3 mb-sm-0">
					<div className="card">
						<img src="https://picsum.photos/id/28/400/200" className="card-img-top img-fluid" alt="..." />
						<div className="card-body text-center">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-footer bg-tertiary text-center">
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>

				</div>

				<div className="col-sm-3 mb-3 mb-sm-0">
					<div className="card">
						<img src="https://picsum.photos/id/280/400/200" className="card-img-top img-fluid" alt="..." />
						<div className="card-body text-center">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div className="card-footer bg-tertiary text-center">
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Card;