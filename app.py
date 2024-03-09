from flask import Flask, render_template, request, jsonify
from your_captioning_module import generate_caption_for_image  # Import your captioning functions

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if request.method == 'POST':
        # Get the uploaded image file
        image_file = request.files['file']
        # Save the image file
        image_path = 'static/uploads/' + image_file.filename
        image_file.save(image_path)
        # Generate caption for the uploaded image
        caption = generate_caption_for_image(image_path)
        return jsonify({'caption': caption, 'image_path': image_path})

if __name__ == '__main__':
    app.run(debug=True)
