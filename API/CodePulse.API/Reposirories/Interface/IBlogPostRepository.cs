using CodePulse.API.Models.Domain;

namespace CodePulse.API.Reposirories.Interface
{
    public interface IBlogPostRepository
    {
        Task<BlogPost> CreateAsync(BlogPost post);
    }
}
