using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Reposirories.Interface;

namespace CodePulse.API.Reposirories.Implementation
{
    public class BlogPostRepository : IBlogPostRepository
    {
        private readonly ApplicationDbContext DbContext;
        public BlogPostRepository(ApplicationDbContext dbContext)
        {
            this.DbContext = dbContext;
        }


        public async Task<BlogPost> CreateAsync(BlogPost post)
        {
            await DbContext.BlogPosts.AddAsync(post);
            await DbContext.SaveChangesAsync();
            return post;
        }
    }
}
