from math import ceil

class Pagination:
    def __init__(self, total, current_page, per_page):
        self.total = total
        self.per_page = per_page
        self.current_page = current_page

    @property
    def last_pages(self):
        return int(ceil(float(self.total) / float(self.per_page)))

    @property
    def prev_page(self):
        if self.current_page == 1:
            return None
        else:
            return self.current_page - 1

    @property
    def next_page(self):
        if self.current_page == self.last_pages:
            return None
        else:
            return self.current_page + 1

    @property
    def start(self):
        return self.current_page * self.per_page - self.per_page + 1

    @property
    def end(self):
        return self.current_page * self.per_page

