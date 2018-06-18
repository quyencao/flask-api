from app import app

if __name__ == '__main__':
    app.run(debug=app.config.get('DEBUG'))
    
# http://www.math-cs.gordon.edu/courses/cs211/ATMExample/
# http://buildingskills.itmaybeahack.com/book/oodesign-3.1/html/index.html
